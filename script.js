function create(tagn, text, atrn, atrv, idn,type,typevalue){
    const ele = document.createElement(tagn);
    ele.id=idn;
    ele.innerHTML=text;
    ele.setAttribute(atrn,atrv);
    ele.setAttribute(type,typevalue);
    
    return ele;
} 
const container = document.createElement("div");

container.classList.add("container","m-5");
const div = document.createElement("div");
div.setAttribute("class","form-group")  
const form=document.createElement("form");
form.id="form";
form.setAttribute("method","");
form.setAttribute("action","");
form.setAttribute("class","form-group");
const labelfn=create("label","First Name:", "for", "first-name","labelfn","class","form-label");
const textfn=create("input","","placeholder","Enter First Name", "first-name", "type","text");
textfn.setAttribute("class","form-control");
const labelln=create("label","Last Name:", "for", "last-name","labelln","class","form-label");
const textln=create("input","","placeholder","Enter Last Name", "last-name", "type","text");
textln.setAttribute("class","form-control");
const labelei=create("label", "Email", "for", "email", "labelei","class","form-label");
const textei=create("input","","placeholder","Enter Email", "email", "type","text");
textei.setAttribute("class","form-control");
const labeladd=create("label","Address:", "for", "address", "labeladd", "class", "form-label");
const textadd=create("textarea","","placeholder","Enter Address", "address", "type","text" );
textadd.setAttribute("class","form-control");
const labelpin=create("label","Pin:", "for", "pincode", "labelpin", "class", "form-label");
const textpin=create("input","","placeholder","Enter PIN", "pincode", "type","text");
textpin.setAttribute("aria-label","Enter pin");
textpin.setAttribute("class","form-control");

const labelSate=create("label","State:", "for", "state", "labelstate", "class", "form-label");
const textState=create("input","","placeholder","Enter State", "state", "type","text");
textState.setAttribute("aria-label","Enter State");
textState.setAttribute("class","form-control");

const labelCountry=create("label","Country:", "for", "country", "labelcountry", "class", "form-label");
const textCountry=create("input","","placeholder","Enter Country", "country", "type","text");
textCountry.setAttribute("aria-label","Enter Country");
textCountry.setAttribute("class","form-control");

const divradio1=document.createElement("div");
divradio1.setAttribute("class", "form-check");   
const pRadio=document.createElement("p");
pRadio.innerHTML = "Gender";

const radiomale= document.createElement("input");

radiomale.setAttribute("type","radio");
radiomale.id="radiomale";
radiomale.setAttribute("name","gender");
radiomale.setAttribute("value","Male");
radiomale.setAttribute("class","form-check-input");

const labelmale=document.createElement("label");
labelmale.setAttribute("for","radiomale");
labelmale.innerHTML="Male";
labelmale.setAttribute("class","form-check-label");

const divradio2=document.createElement("div");
divradio2.setAttribute("class", "form-check"); 
const radiofemale= document.createElement("input");

radiofemale.setAttribute("type","radio");
radiofemale.id="radiofemale";
radiofemale.setAttribute("name","gender");
radiofemale.setAttribute("value","Female");
radiofemale.setAttribute("class","form-check-input");

const labelfemale=document.createElement("label");
labelfemale.setAttribute("for","radiofemale");
labelfemale.innerHTML="Female";
labelfemale.setAttribute("class","form-check-label");

divradio1.append(pRadio, radiomale, labelmale);
divradio2.append( radiofemale, labelfemale);

const divfoodgroup = document.createElement("div");

divfoodgroup.setAttribute("class","form-group");
const legendfoodlabel = document.createElement("p");
legendfoodlabel.innerHTML = "Choice of Food";
legendfoodlabel.setAttribute("class", "form-label");
const divcheck1 = document.createElement("div");
divcheck1.setAttribute("class","form-check");
const labelfood1=create("label","Biriyani", "for", "food1", "labelfood1", "class", "form-check-label");
const food1=document.createElement("input");
food1.setAttribute("type", "checkbox");
food1.setAttribute("name", "food");
food1.setAttribute("value", "Biriyani");
food1.id="food1";

divcheck1.append(labelfood1, food1);

const divcheck2 = document.createElement("div");
divcheck2.setAttribute("class","form-check");
const labelfood2=create("label","Idly", "for", "food2", "labelfood2", "class", "form-check-label");
const food2=document.createElement("input");
food2.setAttribute("type", "checkbox");
food2.setAttribute("name", "food");
food2.setAttribute("value", "Idly");
food2.id="food2";

divcheck2.append(labelfood2, food2);

const divcheck3 = document.createElement("div");
divcheck3.setAttribute("class","form-check");
const labelfood3=create("label","Parotta", "for", "food3", "labelfood3", "class", "form-check-label");
const food3=document.createElement("input");
food3.setAttribute("type", "checkbox");
food3.setAttribute("name", "food");
food3.setAttribute("value", "Parotta");
food3.id="food3";

divcheck3.append(labelfood3, food3);

const divcheck4 = document.createElement("div");
divcheck4.setAttribute("class","form-check");
const labelfood4=create("label","Noodles", "for", "food4", "labelfood4", "class", "form-check-label");
const food4=document.createElement("input");
food4.setAttribute("type", "checkbox");
food4.setAttribute("name", "food");
food4.setAttribute("value", "Noodles");
food4.id="food4";

divcheck4.append(labelfood4, food4);

const divcheck5 = document.createElement("div");
divcheck5.classList.add("form-check","form-switch");
const labelfood5 = document.createElement("label");
labelfood5.innerHTML ="Chapati";
labelfood5.setAttribute("class","form-check-label");
labelfood5.setAttribute("for","food5");

const food5=document.createElement("input");
food5.setAttribute("class", "form-check-input");
food5.setAttribute("type", "checkbox");
food5.setAttribute("role", "switch");
food5.setAttribute("name", "food");
food5.setAttribute("value", "Chapati");
food5.id="food5";

divcheck5.append(labelfood5, food5);

divfoodgroup.append(legendfoodlabel, divcheck1, divcheck2, divcheck3, divcheck4, divcheck5);

const submit = document.createElement("button");
submit.setAttribute("type", "submit");
submit.id = "submit";
submit.classList.add("btn","btn-primary");

submit.innerHTML = "Submit";
div.append(labelfn, textfn, labelln, textln, labelei, textei, divradio1, divradio2, divfoodgroup, labeladd, textadd, labelpin, textpin, labelSate, textState, labelCountry, textCountry, submit);
form.append(div);
const h1=document.createElement("h1");
h1.id="title";
h1.setAttribute("class","text-center");
h1.innerHTML="DOM-Forms";
const p=document.createElement("p");
p.id="description"
p.setAttribute("class","text-center");
p.innerHTML="This is DOM Manipulation with forms";
container.append(h1,p,form)

document.body.append(container);

document.getElementById("first-name").required=true;
document.getElementById("pincode").required=true;
document.getElementById("last-name").required=true;

const table =document.createElement("table");
table.classList.add("table","table-striped");
const  thead = document.createElement("thead");

const tr1 = document.createElement("tr");
const th1 = document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHTML = "First Name";
const th2 = document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHTML = "Last Name";

const th3 = document.createElement("th");
th3.setAttribute("scope","col");
th3.innerHTML = "Email";

const th4 = document.createElement("th");
th4.setAttribute("scope","col");
th4.innerHTML = "Address";

const th5 = document.createElement("th");
th5.setAttribute("scope","col");
th5.innerHTML = "Pincode";

const th6 = document.createElement("th");
th6.setAttribute("scope","col");
th6.innerHTML = "Gender";

const th7 = document.createElement("th");
th7.setAttribute("scope","col");
th7.innerHTML = "Food";

const th8 = document.createElement("th");
th8.setAttribute("scope","col");
th8.innerHTML = "State";

const th9 = document.createElement("th");
th9.setAttribute("scope","col");
th9.innerHTML = "Country";

tr1.append(th1, th2, th3, th4, th5,th6, th7, th8, th9);

thead.append(tr1);
table.append(thead);

const tbody = document.createElement("tbody");



function tablerow(tag1,tag2,firstname,lastname,email,state,pincode,gender, food, country,address){
    const ele1= document.createElement(tag1);
    const ele2= document.createElement(tag2);
    ele2.innerHTML = firstname;
    const ele3= document.createElement(tag2);
    ele3.innerHTML = lastname;
    const ele4= document.createElement(tag2);
    ele4.innerHTML = email;
    const ele5= document.createElement(tag2);
    ele5.innerHTML = address;
    const ele6= document.createElement(tag2);
    ele6.innerHTML = pincode;
    const ele7= document.createElement(tag2);
    ele7.innerHTML = gender;
    const ele8= document.createElement(tag2);
    ele8.innerHTML = food;
    const ele9= document.createElement(tag2);
    ele9.innerHTML = state;
    const ele10= document.createElement(tag2);
    ele10.innerHTML = country;

    ele1.append(ele2, ele3, ele4, ele5, ele6, ele7, ele8, ele9, ele10);
    return ele1;

}

submit.addEventListener("click",function(e) {
    e.preventDefault();
    const firstname = document.getElementById("first-name").value;

    const lastname = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const food = document.getElementsByName("food");
    var values = [];
    for (var i = 0; i < food.length; i++) {
    if (food[i].checked) {
    values.push(food[i].value);
  }
}
    tbody.append(tablerow("tr", "td", firstname, lastname, email, state, pincode, gender, values, country, address));
    console.log(firstname);
    console.log(values);
    console.log(gender);

    document.getElementById("first-name").value="";
    document.getElementById("last-name").value="";
    document.getElementById("email").value="";
    document.getElementById("address").value="";
    document.getElementById("pincode").value="";
    document.getElementById("state").value="";
    document.getElementById("country").value="";
    document.querySelector('input[name="gender"]:checked').prop("checked",false)
    document.getElementsByName('input[name="food"]:checked').prop("checked",false)
    

});  


    


    //console.log(firstname, lastname, pincode, state, country, email, address);
    
 

table.append(tbody)

document.body.append(table);








