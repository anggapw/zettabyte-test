// Expected Result :
// [
//   { name: 'Rahman', school_name: 'STJK' },
//   { name: 'Budi', school_name: 'STJK' }
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.
const students = [
	{
		id: '1',
		name: 'Ryan',
		school: {
			id: '1',
			short_name: 'PLMK',
		},
	},
	{
		id: '2',
		name: 'Ari',
		school: {
			id: '1',
			short_name: 'PLMK',
		},
	},
	{
		id: '3',
		name: 'Rahman',
		school: {
			id: '2',
			short_name: 'STJK',
		},
	},
	{
		id: '4',
		name: 'Budi',
		school: {
			id: '2',
			short_name: 'STJK',
		},
	},
	{
		id: '5',
		name: 'Jaka',
		school: {
			id: '1',
			short_name: 'PLMK',
		},
	},
];
const schoolId = '2';

function result(students, schoolId) {
	// Your Code Here

	const temp = students.map((item) => {
		const obj = {};
		if (schoolId === item.school.id) {
			obj.name = item.name;
			obj.school_name = item.school.short_name;
		}

		return obj;
	});

	const filter = temp.filter((value) => Object.keys(value).length !== 0);

	return filter;
}

console.log(result(students, schoolId));
