export default {
  name: 'Job',
  type: 'document',
  title: 'Job',
  fields: [
    {
      name: 'organisation',
      type: 'string',
      title: 'organisation',
    },
    {
      name: 'description',
      type: 'string',
      title: 'description',
    },
    {
      name: 'jobTitle',
      type: 'string',
      title: 'jobTitle',
    },
    {
      name: 'location',
      type: 'string',
      title: 'location',
    },
    {
      name: 'profession',
      type: 'string',
      title: 'profession',
    },
    {
      name: 'jobType',
      type: 'string',
      title: 'jobType',
    },
    {
      name: 'sector',
      type: 'string',
      title: 'sector',
    },
    {
      name: 'salaryType',
      type: 'string',
      title: 'salaryType',
    },
    {
      name: 'salary',
      type: 'string',
      title: 'salary',
    },
    {
      name: 'aboutRole',
      type: 'string',
      title: 'aboutRole',
    },
    {
      name: 'closingDate',
      type: 'date',
      title: 'closingDate',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'applyCTA',
      type: 'string',
      title: 'applyCTA',
    },
    {
      name: 'JobId',
      type: 'number',
      title: 'JobId',
    },
  ],
}
