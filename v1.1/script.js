var notPressed = true
setTimeout(()=>{
    var div = document.getElementsByClassName('component-heading')[1]
    var url = window.location.href
    
    addSettingsTab()
    
    if(url.endsWith('/student') || url.endsWith('/student/') || url.endsWith('/student#')){
        
        

        var dataDiv = document.createElement('div')
        dataDiv.setAttribute('id','data-div')
        var total = 0
        
        var finalWithAdvisory = 0
        var final = 0
        let gradeList = []
    
        var grade_values = document.querySelectorAll('.numeric-grade')
        var grade_arr = Array.from(grade_values)
        
        for(grade of grade_arr){
            gradeList.push(grade.innerHTML)
        }
    
        for(grade of gradeList){
            total += parseFloat(grade)
        }
        
        
        if(gradeList.length === 10){
            finalWithAdvisory = Math.round(total / (gradeList.length - 2) * 100) / 100
            final = Math.round(total / (gradeList.length - 3) * 100) / 100
        }
        else{
            finalWithAdvisory = Math.round(total / (gradeList.length - 1) * 100) / 100
            final = Math.round(total / (gradeList.length - 2) * 100) / 100
        }
        
        

        var letterWithoutAdvisory = getLetterGrade(final)
        var letterWithAdvisory = getLetterGrade(finalWithAdvisory)
        var dataTextWithAdvisory = document.createElement('h1')
        dataTextWithAdvisory.innerHTML = `Average Grade:&ensp;${letterWithAdvisory}&emsp;&ensp;${finalWithAdvisory}% (includes advisory)`
        var dataTextWithoutAdvisory = document.createElement('h1')
        dataTextWithoutAdvisory.innerHTML = `Average Grade:&ensp;${letterWithoutAdvisory}&emsp;&ensp;${final}% (excludes advisory)`
        dataDiv.style.fontSize = '12px'
        dataDiv.style.textAlign = 'center'
        dataDiv.style.justifyContent = 'center'
        dataDiv.style.borderBottom = '1px solid #d6d6d6'
        
        dataTextWithAdvisory.style.fontWeight = '300'
        dataTextWithoutAdvisory.style.fontWeight = '300'
        dataDiv.appendChild(dataTextWithAdvisory)
        dataDiv.appendChild(dataTextWithoutAdvisory)  
        div.appendChild(dataDiv)
    }
    else{
        
        var div = document.getElementsByClassName('vx-list course-list active')[0]
        var dataDiv = document.createElement('div')
        dataDiv.setAttribute('id','data-div')

        var total = 0
        
        var finalWithAdvisory = 0
        var final = 0
        let gradeList = []
    
        var grade_values = document.querySelectorAll('.course-numeric-grade')
        var grade_arr = Array.from(grade_values)
        
        for(grade of grade_arr){
            gradeList.push(grade.innerHTML)
        }
        

        for(grade of gradeList){
            total += parseFloat(grade)
        }
        gradeList.pop()
        gradeList.pop()
        
        if(gradeList.length === 10){
            finalWithAdvisory = Math.round(total / (gradeList.length - 2) * 100) / 100
            final = Math.round(total / (gradeList.length - 3) * 100) / 100
        }
        else{
            finalWithAdvisory = Math.round(total / (gradeList.length - 1) * 100) / 100
            final = Math.round(total / (gradeList.length - 2) * 100) / 100
        }
        
        var letterWithoutAdvisory = getLetterGrade(final)
        var letterWithAdvisory = getLetterGrade(finalWithAdvisory)
        var dataTextWithAdvisory = document.createElement('h1')
        dataTextWithAdvisory.innerHTML = `Average Grade:&ensp;${letterWithAdvisory}&emsp;&ensp;${finalWithAdvisory}% (includes advisory)`
        var dataTextWithoutAdvisory = document.createElement('h1')
        dataTextWithoutAdvisory.innerHTML = `Average Grade:&ensp;${letterWithoutAdvisory}&emsp;&ensp;${final}% (excludes advisory)`
        dataDiv.style.fontSize = '12px'
        dataDiv.style.textAlign = 'center'
        dataDiv.style.justifyContent = 'center'
        dataDiv.style.borderBottom = '1px solid #d6d6d6'
        
        dataTextWithAdvisory.style.fontWeight = '300'
        dataTextWithoutAdvisory.style.fontWeight = '300'
        
        dataDiv.appendChild(dataTextWithAdvisory)
        dataDiv.appendChild(dataTextWithoutAdvisory)
        div.prepend(dataDiv)
    }
    

    function getLetterGrade(num){
        var letterGrade = ''
        if(num >= 92.50){
            letterGrade = 'A'
        }
        else if(num >= 90.00 && num < 92.50){
            letterGrade = 'A-'
        }
        else if(num >= 87.00 && num < 90.00){
            letterGrade = 'B+'
        }
        else if(num >= 83.00 && num < 87.00){
            letterGrade = 'B'
        }
        else if(num >= 80.00 && num < 83.00){
            letterGrade = 'B-'
        }
        else if(num >= 77.00 && num < 80.00){
            letterGrade = 'C+'
        }
        else if(num >= 73.00 && num < 77.00){
            letterGrade = 'C'
        }
        else if(num >= 70.00 && num < 73.00){
            letterGrade = 'C-'
        }
        else if(num >= 67.00 && num < 70){
            letterGrade = 'D+'
        }
        else if(num >= 63.00 && num < 67.00){
            letterGrade = 'D'
        } 
        else if(num >= 60.00 && num < 63.00){
            letterGrade = 'D-'
        }
        else{
            letterGrade = 'F'
        }

        return letterGrade
    }
},250)

function addSettingsTab(){
    console.log('function ran')
    var div = document.getElementsByClassName('component-button-link left')[0]
    div.setAttribute('style','')
    var header = document.getElementsByClassName('vx-nav-right')[0]
    var extSettings =  document.createElement('a')
    var icon = document.createElement('i')
    extSettings.setAttribute('class','chrome-extension vx-nav-button screen-button')
    extSettings.setAttribute('style', 'margin-left: 20%; margin-right:15%; background: rgb(6, 158, 115); color: rgb(0, 0, 0);')
    extSettings.appendChild(icon)
    extSettings.append('Extension Settings')
    
    extSettings.addEventListener('click',()=>{
        if(notPressed){
            showModal()
            notPressed = false
        }
    })
    //extSettings.addEventListener('mouseleave',()=>{
    //    removeModal()
    //})
    div.prepend(extSettings)

    
}

function showModal(){
    
    var extSettings = document.getElementsByClassName('chrome-extension')[0]
    var dropdownContent = document.createElement('div')
    var bg = document.querySelector('body')
    dropdownContent.setAttribute('class','dropdown-content')
    var text = document.createElement('h1')
    text.innerHTML = 'Hello World!'

    dropdownContent.appendChild(text)
    dropdownContent.style.display = 'none'
    dropdownContent.style.position = 'fixed'
    dropdownContent.style.minWidth = '160px'
    dropdownContent.style.background = '#fff'
    dropdownContent.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)'
    dropdownContent.style.padding = '12px 16px'
    dropdownContent.style.zIndex = 10

    dropdownContent.style.display = 'block'

    extSettings.appendChild(dropdownContent)
    
    window.addEventListener('click',(e)=>{
        if(e.target == bg){
            dropdownContent.remove()
            notPressed = true
        }
    })
}

function removeModal(){
    var dropdownContent = document.querySelector('.dropdown-content').remove()
}