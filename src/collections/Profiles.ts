import type { CollectionConfig } from 'payload'

export const Profiles: CollectionConfig = {
  slug: 'profiles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'sub_title', 'profile_picture'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'sub_title',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'profile_picture',
      type: 'text',
      required: true,
    },
    {
      name: 'cover_picture',
      type: 'text',
      required: true,
    },
  ],
}
