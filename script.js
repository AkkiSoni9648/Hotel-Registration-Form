document.getElementById("register").addEventListener("click",function(){
    if(formValid()){
        analysedata();
        document.getElementById("popup").style.display="block";
        document.getElementById("blur").classList.toggle('active');
    }
    else{
        alert("Fill all the Fields");
    }
});

document.getElementById("close").addEventListener("click",function(){
    document.getElementById("popup").style.display="none";
    document.getElementById("blur").classList.toggle('active');
    document.getElementById("reg_form").reset();
});



function formValid(){
    var d=document.getElementById("reg_form");
    var customername = d.elements.customer_name.value;
    var check_in_date = d.elements.check_in_date.value;
    var number_of_days = d.elements.number_of_days.value;
    var number_of_persons = d.elements.number_of_persons.value;
    
    var advance_amount = d.elements.advance_amount.value;
    if(customername=='' || check_in_date=='' || number_of_days=='' || number_of_persons=='' ||advance_amount== '' ){
        return false;  
    }
    return true;
}

function analysedata(){
    var d=document.getElementById("reg_form")
    var customername = d.elements.customer_name.value;
    var check_in_date = d.elements.check_in_date.value;
    var number_of_days = d.elements.number_of_days.value;
    var number_of_persons = d.elements.number_of_persons.value;
    var extra_charges = 0;
    if(number_of_persons>2){
        extra_charges = number_of_days*(number_of_persons-2)*1000;
    }
    var room_type=document.getElementsByName('room_type');
    var room_value = {
        'Delux':2500,
        'Suite':4000
    }
    var room_rate,room;
    for(var i=0 ; i< room_type.length ; i++){
        if(room_type[i].checked){
            room=room_type[i].value;
            room_rate=room_value[room_type[i].value];
        }
    }

    var amenities=document.getElementsByName('amenities');
    const comfort_value = {
        'AC':1000,
        'Locker':300
    }
    var comfort_rate = 0,amenity=[];
    for(var i=0 ; i< amenities.length ; i++){
        if(amenities[i].checked){
            amenity.push(amenities[i].value);
            comfort_rate=comfort_rate+comfort_value[amenities[i].value];
        }
    }

    var advance_amount = parseInt(d.elements.advance_amount.value);
    var total_amount = (room_rate*number_of_days) + (comfort_rate*number_of_days) + extra_charges;
    var balance_amount =total_amount - advance_amount;

    document.getElementById("customers_name").innerHTML = customername;
    document.getElementById("check_in_date").innerHTML = check_in_date;
    document.getElementById("no_of_days").innerHTML = number_of_days;
    document.getElementById("no_of_persons").innerHTML = number_of_persons;
    document.getElementById("room_type").innerHTML = room;
    document.getElementById("amenities").innerHTML = amenity;
    document.getElementById("advance_amount").innerHTML = advance_amount;
    document.getElementById("total_amount").innerHTML = total_amount;
    document.getElementById("balance_amount").innerHTML = balance_amount;   
}