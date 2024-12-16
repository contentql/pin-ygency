'use client'

import { ListType, Product } from '@payload-types'

import Empty from '@/components/Empty'
import BlogSkeleton from '@/components/skeletons/BlogSkeleton'
import { trpc } from '@/trpc/client'

import Products from './Products'

function ProductsList({
  products,
  block,
}: {
  products: Product[]
  block: ListType
}) {
  const { data: productsData, isLoading } =
    trpc.product.getAllProducts.useQuery(undefined, {
      initialData: products,
    })

  console.log({ productsData, block, products })
  return (
    <>
      <section
        className='page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center'
        style={{
          backgroundImage: '/assets/images/banner/banner-bg.jpg',
        }}>
        <div className='container'>
          <div className='banner-inner rpt-10'>
            <h2 className='page-title wow fadeInUp delay-0-2s'>
              {block?.title}
            </h2>
            <p className='line-clamp-3'>{block?.description}</p>
          </div>
        </div>
      </section>
      {isLoading ? (
        <BlogSkeleton />
      ) : products?.length <= 0 ? (
        <Empty>
          <h4 style={{ marginBottom: '40px' }}>Products not found</h4>
        </Empty>
      ) : (
        <Products productsData={productsData as Product[]} />
      )}
    </>
  )
}

export default ProductsList
