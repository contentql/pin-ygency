import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  console.log('Dropping old color columns')
  // Light Mode Columns
  // Primary
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_primary\`;`,
  )

  // Background
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_background\`;`,
  )

  // Text
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_text\`;`,
  )

  // Foreground
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_foreground\`;`,
  )

  // Popover
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_popover\`;`,
  )

  // Border
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_border\`;`,
  )

  //   Dark Mode Columns
  // Primary
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_primary\`;`,
  )

  // Background
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_background\`;`,
  )

  // Text
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_text\`;`,
  )

  // Foreground
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_foreground\`;`,
  )

  // Popover
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_popover\`;`,
  )

  // Border
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_border\`;`,
  )

  console.log('Dropped old color columns')

  console.log('Creating new columns with latest colors...')
  // Adding columns directly with hardcoded values
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_background\` text DEFAULT '#ffffff' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_foreground\` text DEFAULT '#0a0a0a' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_primary\` text DEFAULT '#9372f7' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_primary_foreground\` text DEFAULT '#f1f5f9' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_card\` text DEFAULT '#ffffff' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_card_foreground\` text DEFAULT '#0a0a0a' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_popover\` text DEFAULT '#ffffff' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_popover_foreground\` text DEFAULT '#0a0a0a' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_secondary\` text DEFAULT '#e2e8f0' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_secondary_foreground\` text DEFAULT '#1e293b' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_muted\` text DEFAULT '#e2e8f0' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_muted_foreground\` text DEFAULT '#6b7280' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_accent\` text DEFAULT '#e2e8f0' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_accent_foreground\` text DEFAULT '#1e293b' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_destructive\` text DEFAULT '#ef4444' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_destructive_foreground\` text DEFAULT '#f1f5f9' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_border\` text DEFAULT '#d1d5db' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_input\` text DEFAULT '#d1d5db' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_light_mode_ring\` text DEFAULT '#9372f7' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_background\` text DEFAULT '#0a0a0a' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_foreground\` text DEFAULT '#f1f5f9' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_primary\` text DEFAULT '#7158e2' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_primary_foreground\` text DEFAULT '#f1f5f9' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_card\` text DEFAULT '#0a0a0a' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_card_foreground\` text DEFAULT '#f1f5f9' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_popover\` text DEFAULT '#0a0a0a' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_popover_foreground\` text DEFAULT '#f1f5f9' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_secondary\` text DEFAULT '#232c3a' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_secondary_foreground\` text DEFAULT '#f1f5f9' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_muted\` text DEFAULT '#232c3a' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_muted_foreground\` text DEFAULT '#a1a8c0' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_accent\` text DEFAULT '#232c3a' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_accent_foreground\` text DEFAULT '#f1f5f9' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_destructive\` text DEFAULT '#752626' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_destructive_foreground\` text DEFAULT '#f1f5f9' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_border\` text DEFAULT '#232c3a' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_input\` text DEFAULT '#232c3a' NOT NULL;`,
  )
  await db.run(
    sql`ALTER TABLE site_settings ADD \`theme_settings_dark_mode_ring\` text DEFAULT '#7158e2' NOT NULL;`,
  )
  console.log('Created new columns with latest colors')
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  console.log('Applying migrate down...')

  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_primary_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_card\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_card_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_popover_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_secondary\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_secondary_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_muted\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_muted_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_accent\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_accent_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_destructive\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_destructive_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_input\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_light_mode_ring\`;`,
  )

  // Dark Mode
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_primary_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_card\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_card_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_popover_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_secondary\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_secondary_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_muted\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_muted_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_accent\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_accent_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_destructive\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_destructive_foreground\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_input\`;`,
  )
  await db.run(
    sql`ALTER TABLE \`site_settings\` DROP COLUMN \`theme_settings_dark_mode_ring\`;`,
  )

  console.log('Dropped newly created color columns')
}
