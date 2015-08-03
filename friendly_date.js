
function friendly(arr) {
	var months = [
	"January", "February", "March", "April",
	"May", "June", "July", "August",
	"September", "October", "November", "December"
	],
	// days = [
	// "Sunday", "Monday", "Tuesday",
	// "Wednesday", "Thursday", "Friday", "Saturday"
	// ],
	ordinals = {
		1: 'st', 2: 'nd', 3: 'rd',
		21: 'st', 22: 'nd', 23: 'rd',
		31: 'st'
	};
	cy = new Date().getFullYear(),
	fDate = arr[0].split('-'), sDate = arr[1].split('-'),

	fy = parseInt(fDate[0]), fm = months[parseInt(fDate[1]) - 1],
	fd = parseInt(fDate[2]), fo = ordinals[fd] || 'th',

	sy = parseInt(sDate[0]), sm = months[parseInt(sDate[1]) - 1],
	sd = parseInt(sDate[2]), so = ordinals[sd] || 'th',

	fyo = ', ' + fy,
	syo = ', ' + sy,

	fmo = fm + ' ',
	smo = sm + ' ';


	if(fy == sy && fm == sm && fd == sd) return [fmo + fd + fo + fyo];

	if(fy == cy && (fy == sy || fy == sy - 1)){
		fyo = '';
		syo = '';
	}

	if(fy == sy) fyo = '';


	if((fy == sy ) && fm == sm) smo = '';

	return [
	fmo + fd + fo + fyo,
	smo + sd + so + syo,
	];
}
friendly(['2015-07-01', '2015-07-04']);

p=console.log;

x=friendly(['2022-09-05', '2023-09-04']);
p(x)
