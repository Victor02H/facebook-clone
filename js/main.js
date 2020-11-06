// pega o elemento select
const selDay = document.getElementById('selectDay');
const selMon = document.getElementById('selectMonth');
const selYear = document.getElementById('selectYear');

// acrescentando tags option no select
for (var days = 1; days < 32; days++) {
    selDay.innerHTML += '<option>'+days+'</option>';
}

var months = ['Jan','Fev','Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
for (var mon = 0; mon < 12; mon++) {
    selMon.innerHTML += '<option>'+months[mon]+'</option>';
}

for (var year = 1930; year < 2021; year++) {
    selYear.innerHTML += '<option>'+year+'</option>';
}