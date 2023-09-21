function carica() {
    const body = document.getElementsByTagName("body")
    const newForm = document.createElement("form")

    const newlabel = document.createElement("label")
    const newtext = document.createTextNode("prova")
    newlabel.appendChild(newtext)

    const newtextarea = document.createElement("textarea")

    const newinput = document.createElement("input")

    const newinput1 = document.createElement("input")
    newinput1.setAttribute("type", "radio")

    const newinput2 = document.createElement("input")
    newinput1.setAttribute("type", "checkbox")

    //select
    const newselect = document.createElement("select")

    const newOption = document.createElement("option")
    const newtext1 = document.createTextNode("volvo")
    newOption.appendChild(newtext1)
    newselect.appendChild(newOption)

    const newOption1 = document.createElement("option")
    const newtext2 = document.createTextNode("mercedesi")
    newOption1.appendChild(newtext2)
    newselect.appendChild(newOption1)
    
    const newOption2 = document.createElement("option")
    const newtext3 = document.createTextNode("audi")
    newOption2.appendChild(newtext3)
    newselect.appendChild(newOption2)
    
    const newOption3 = document.createElement("option")
    const newtext4 = document.createTextNode("ferrari")
    newOption3.appendChild(newtext4)
    newselect.appendChild(newOption3)
    
    //append
    newForm.appendChild(newlabel)
    newForm.appendChild(newtextarea)
    newForm.appendChild(newinput)
    newForm.appendChild(newinput1)
    newForm.appendChild(newinput2)
    newForm.appendChild(newselect)

    body[0].appendChild(newForm)
}