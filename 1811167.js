var nasigoreng = 10.00;
var egg = 1.00;
var yum = 15.00;

function count() {
    var nasicount = document.getElementById('countnasi').value;
    var boiledegg = document.getElementById('addboiledegg').value;

    var nasitotal = nasigoreng*nasicount;
    var eggtotal = boiledegg*egg;

    document.getElementById('bill1').innerHTML = 'Nasi goreng kampung ala Thai x ' + nasicount + '     ' + nasitotal + '.00';
    document.getElementById('bill2').innerHTML = 'Add-On Hard Boiled Egg x ' + boiledegg + '     ' + eggtotal + '.00';
}

function counttom(){
  var tom = document.getElementById('counttomyum').value;
  var tomtotal = tom*yum;

  document.getElementById('bill3').innerHTML = 'Prawn tom yum soup x ' + tom + '     ' + tomtotal + '.00';
}

function totall() {
  var countnasi = document.getElementById('countnasi').value;
  var eggboiled = document.getElementById('addboiledegg').value;
  var tomtom = document.getElementById('counttomyum').value;

  var to = (countnasi*nasigoreng) + (eggboiled*egg) + (tomtom*yum);
  var sst = to*0.06

  document.getElementById('total').innerHTML = 'Total ' + to + '.00';
  document.getElementById('tax').innerHTML = 'SST 6% ' + sst;
  document.getElementById('gtotal').innerHTML = 'GRAND TOTAL ' + (to+sst);

}
