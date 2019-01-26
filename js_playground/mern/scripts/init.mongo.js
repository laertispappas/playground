db = new Mongo().getDB('issuetracker');

db.issues.remove({});

db.issues.insert([
  {
    status: 'Open',
    owner: 'Laertis',
    created: new Date('2017-05-05'),
    effort: 5,
    completionDate: undefined,
    title: 'Error in console when clicking add'
  },
  {
    status: 'Assigned',
    owner: 'John',
    created: new Date('2017-06-01'),
    effort: 14,
    completionDate: new Date('2017-08-30'),
    title: 'Missing bottom border on panel'
  }
])
