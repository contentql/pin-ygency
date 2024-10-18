import configPromise from '@payload-config'
import { User } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Ora } from 'ora'

import { getRandomInt } from '@/utils/getRandomInt'

import { AuthorDataType, authorImagesData, authorsData } from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async (spinner: Ora): Promise<(string | User)[]> => {
  try {
    spinner.start(`Started created authors...`)
    const imagesResult = await Promise.allSettled(
      authorImagesData.map(tagImageData =>
        payload.create({
          collection: 'media',
          data: {
            alt: tagImageData.alt,
          },
          filePath: tagImageData.filePath,
        }),
      ),
    )

    const formattedImagesResult = imagesResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')

    const formattedAuthorsData: AuthorDataType[] = authorsData.map(
      authorData => {
        const tagImageId = formattedImagesResult.at(
          getRandomInt(0, formattedImagesResult.length - 1),
        )?.id

        return {
          ...authorData,
          imageUrl: tagImageId!,
        }
      },
    )

    const results = await Promise.allSettled(
      formattedAuthorsData.map(authorData =>
        payload.create({
          collection: 'users',
          data: authorData,
          locale: undefined,
          fallbackLocale: undefined,
          overrideAccess: true,
          disableVerificationEmail: true,
          context: {
            preventRoleOverride: true,
          },
        }),
      ),
    )

    const formattedResults = results.map(result =>
      result.status === 'fulfilled'
        ? result.value
        : `Failed to seed: ${result.reason}`,
    )

    const errors = formattedResults.filter(result => typeof result === 'string')

    if (errors.length > 0) {
      throw new Error(
        `Seeding failed with the following errors:\n${errors.join('\n')}`,
      )
    }

    spinner.succeed(`Successfully created authors.`)
    return formattedResults
  } catch (error) {
    spinner.succeed(`Failed to create authors.`)
    throw error
  }
}

export default seed
