var notPressed = true
setTimeout(()=>{
    var div = document.getElementsByClassName('component-heading')[1]
    var url = window.location.href
    
    addSettingsTab()
    if(localStorage.getItem('header-color') !== null){
        var header = document.getElementsByClassName('vx-nav')[0]
        var color = localStorage.getItem('header-color') !== undefined ? localStorage.getItem('header-color') : '#0071bd'
        
        var topButton = document.getElementsByClassName('vx-nav-center__portal')[0]
        var secondTopButton = document.getElementsByClassName('vx-nav-center__portals-button vx-tooltipped vx-tooltipped--s')[0]

        topButton.style.background = color
        secondTopButton.style.background = color
        
        header.style.background = color

        var leftTriangle = document.createElement('a')
        leftTriangle.setAttribute('class','chrome-extension big-button left-triangle')
        leftTriangle.setAttribute('style',`line-height: 35px; color: ${color}; border-bottom: 35px solid ${color};border-left: 10px solid transparent;content: ""; left: -10px;position: absolute;top: 0;`)

        topButton.appendChild(leftTriangle)

        var rightTriangle = document.createElement('a')
        rightTriangle.setAttribute('style',`line-height: 35px; color: ${color}; border-bottom: 35px solid ${color};border-right: 10px solid transparent;content: ""; right: -10px;position: absolute;top: 0; z-index: 2`)
        rightTriangle.setAttribute('class','chrome-extension big-button right-triangle')
        topButton.appendChild(rightTriangle)

        var secondLeftTriangle = document.createElement('a')
        secondLeftTriangle.setAttribute('class','chrome-extension small-button left-triangle')
        secondLeftTriangle.setAttribute('style',`border-color: transparent ${color} transparent transparent;border-style: solid;border-width: 0 8px 26px 0;content: "";display: block;left: -8px;position: absolute;top: -1px; z-index: 20;`)

        secondTopButton.appendChild(secondLeftTriangle)

        var secondRightTriangle = document.createElement('a')
        secondRightTriangle.setAttribute('class','chrome-extension small-button right-triangle')
        secondRightTriangle.setAttribute('style',`border-color: transparent transparent transparent ${color};border-style: solid;border-width: 25px 0 0 7px;content: "";display: block;left: 43px;position: absolute;top: -1px;`)    
        secondTopButton.appendChild(secondRightTriangle)
        
    }
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
    

    
},300)
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

function addSettingsTab(){
    var div = document.getElementsByClassName('component-button-link left')[0]

    var extSettings =  document.createElement('a')
    var schedule = document.getElementsByClassName('screen-button')[0]
    var submitButton = document.getElementsByClassName('screen-button')[1]

    var extIcon = document.createElement('i')
    extIcon.setAttribute('class','chrome-extension nc-icon-glyph ui-1_settings-gear-64')
    extIcon.setAttribute('style','margin-right: 5px; vertical-align: middle;')
    
    schedule.style.marginLeft = '10%'
    schedule.style.marginRight = '10%'

    extSettings.setAttribute('class','chrome-extension vx-nav-button screen-button')
    extSettings.setAttribute('style', ' background: rgb(6, 158, 115); color: rgb(0, 0, 0);')
    
    submitButton.setAttribute('style','background: #27AE60; color: #FFFFFF;')

    div.setAttribute('style','justify-content: center; text-align: center;')

    
    
    extSettings.addEventListener('click',()=>{
        if(notPressed){
            showModal()
            notPressed = false
        }
    })

    extSettings.appendChild(extIcon)
    extSettings.append('Extension Settings')
    div.appendChild(submitButton)
    div.prepend(extSettings)

    
}

function showModal(){
    var topButton = document.getElementsByClassName('vx-nav-center__portal')[0]
    var secondTopButton = document.getElementsByClassName('vx-nav-center__portals-button vx-tooltipped vx-tooltipped--s')[0]
    var header = document.getElementsByClassName('vx-nav')[0]
    var dropdownContent = document.createElement('div')
    var bg = document.querySelector('body')
    dropdownContent.setAttribute('class','dropdown-content')
    var text = document.createElement('h1')
    var extSettings = document.getElementsByClassName('chrome-extension nc-icon-glyph ui-1_settings-gear-64')[0]
    text.innerHTML = 'Change header color: '

    var colors = document.createElement('input')
    colors.setAttribute('type', 'color')
    colors.setAttribute('class','chrome-extension color-input')
    colors.setAttribute('value',localStorage.getItem('header-color'))
    dropdownContent.appendChild(text)
    dropdownContent.appendChild(colors)

    var leftTriangle = document.getElementsByClassName('chrome-extension big-button left-triangle')[0]
    var rightTriangle = document.getElementsByClassName('chrome-extension big-button right-triangle')[0]

    var secondLeftTriangle = document.getElementsByClassName('chrome-extension small-button left-triangle')[0]
    var secondRightTriangle = document.getElementsByClassName('chrome-extension small-button right-triangle')[0]
    colors.addEventListener('input',(e)=>{
        console.log(localStorage.getItem('header-color'))
        if(localStorage.getItem('header-color') !== null){
            header.style.background = localStorage.getItem('header-color')
            topButton.style.background = e.target.value
            leftTriangle.style.borderBottom = `35px solid ${e.target.value}`
            rightTriangle.style.borderBottom = `35px solid ${e.target.value}`
            secondTopButton.style.background = e.target.value
            secondLeftTriangle.style.borderColor = `transparent ${e.target.value} transparent transparent`
            secondRightTriangle.style.borderColor = `transparent transparent transparent ${e.target.value}`
            
        }
        localStorage.setItem('header-color',e.target.value)
    })
    
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
