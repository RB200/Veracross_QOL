var notPressed = true

setTimeout(()=>{
    
    var div = document.getElementsByClassName('component-heading')[1]
    var url = window.location.href
    console.log(document.getElementsByClassName('icon-block'))
    
    if(localStorage.getItem('header-color') !== null){
        var header = document.getElementsByClassName('vx-nav')[0]
        var color = localStorage.getItem('header-color') !== undefined ? localStorage.getItem('header-color') : '#0071bd'
        
        var topButton = document.getElementsByClassName('vx-nav-center__portal')[0]
        var secondTopButton = document.getElementsByClassName('vx-nav-center__portals-button vx-tooltipped vx-tooltipped--s')[0]

        var assignmentPlannerIcon = document.getElementsByClassName("icon-block")[1]
        var classesAndReportsIcon = document.getElementsByClassName('icon-block')[2]
        var myCalendarIcon = document.getElementsByClassName('icon-block')[3]
        var schoolCalendarIcon = document.getElementsByClassName('icon-block')[4]
        var studentDirectoryIcon = document.getElementsByClassName('icon-block')[5]
        var facultyDirectoryIcon = document.getElementsByClassName('icon-block')[6]

        topButton.style.background = color
        secondTopButton.style.background = color
        header.style.background = color
        assignmentPlannerIcon.style.color = color
        schoolCalendarIcon.style.color = color
        studentDirectoryIcon.style.color = color
        facultyDirectoryIcon.style.color = color

        let r = hex2rgb(color).r
        let g = hex2rgb(color).g
        let b = hex2rgb(color).b
        
        assignmentPlannerIcon.style.backgroundColor = `rgba(${r},${g},${b},0.2)`
        classesAndReportsIcon.style.color = color
        classesAndReportsIcon.style.backgroundColor = `rgba(${r},${g},${b},0.2)`
        myCalendarIcon.style.color = color
        myCalendarIcon.style.backgroundColor = `rgba(${r},${g},${b},0.2)`
        schoolCalendarIcon.style.backgroundColor = `rgba(${r},${g},${b},0.2)`
        studentDirectoryIcon.style.backgroundColor = `rgba(${r},${g},${b},0.2)`
        facultyDirectoryIcon.style.backgroundColor = `rgba(${r},${g},${b},0.2)`
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

        var leftTriangle = document.getElementsByClassName('chrome-extension big-button left-triangle')[0]
        var rightTriangle = document.getElementsByClassName('chrome-extension big-button right-triangle')[0]

        leftTriangle.style.borderBottom = `36px solid ${color}`
        leftTriangle.style.borderLeft = `14px solid transparent`
        leftTriangle.style.left = '-14px'
        rightTriangle.style.borderBottom = `36px solid ${color}`
        rightTriangle.style.borderRight = `14px solid transparent`
        rightTriangle.style.right = '-14px'

        var secondLeftTriangle = document.getElementsByClassName('chrome-extension small-button left-triangle')[0]
        var secondRightTriangle = document.getElementsByClassName('chrome-extension small-button right-triangle')[0]
        secondLeftTriangle.style.left = "-10px"
        secondLeftTriangle.style.position = "absolute"
        secondLeftTriangle.style.top = '0px'
        secondLeftTriangle.style.borderWidth = "0px 10px 27px 0px"
        secondRightTriangle.style.left = '44px'
        secondRightTriangle.style.position = 'absolute'
        secondRightTriangle.style.top = '-2px'
        secondRightTriangle.style.borderWidth = "28px 0px 0px 10px"
        
    }
    
    if(url.endsWith('/student') || url.endsWith('/student/') || url.endsWith('/student#')){
        addSettingsTab()
        
        var dataDiv = document.createElement('div')
        dataDiv.setAttribute('id','data-div')
        var total = 0

        var final = 0
        let gradeList = []
    
        //var grade_values = document.querySelectorAll('.numeric-grade')
        var classes = document.getElementsByClassName('course')
        var classes_arr = Array.from(classes)
        console.log(classes)
        //classes_arr.shift()
        //classes_arr.shift()
        //classes.shift
        console.log(classes_arr)
        
        for(c of classes_arr){
            if(c.children[0].children[1].children[0].innerHTML.split('<span class="numeric-grade">')[1]){
                let grade = c.children[0].children[1].children[0].innerHTML.split('<span class="numeric-grade">')[1].split("%</span>")[0]
                console.log(grade)
            }
            
        }
        //var grade_arr = Array.from(grade_values)
        
        //for(grade of grade_arr){
        //    gradeList.push(grade.innerHTML)
        //}
        //console.log(gradeList)
        /*for(grade of gradeList){
            total += parseFloat(grade)
        }
        
        
        if(gradeList.length === 10){
            finalWithAdvisory = Math.round(total / (gradeList.length - 2) * 100) / 100
            final = Math.round(total / (gradeList.length - 3) * 100) / 100
        }
        else{
            finalWithAdvisory = Math.round(total / (gradeList.length - 1) * 100) / 100
            final = Math.round(total / (gradeList.length - 2) * 100) / 100
        }*/
        
        

        var letterWithoutAdvisory = getLetterGrade(final)
        
        
        var dataTextWithoutAdvisory = document.createElement('h1')
        dataTextWithoutAdvisory.innerHTML = `Average Grade:&ensp;${letterWithoutAdvisory}&emsp;&ensp;${final}%`
        dataDiv.style.fontSize = '12px'
        dataDiv.style.textAlign = 'center'
        dataDiv.style.justifyContent = 'center'
        dataTextWithoutAdvisory.style.paddingBottom = "20px"
        dataDiv.style.borderBottom = '1px solid #d6d6d6'
        
        
        dataTextWithoutAdvisory.style.fontWeight = '300'
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
function getGrade(){
    var classes = document.getElementsByClassName('course')
        var classes_arr = Array.from(classes)
        for(c of classes_arr){
            let grade = c.children[0].children[1].children[0].innerHTML.split('<span class="numeric-grade">')[1].split("%</span>")[0]
            console.log(grade)
        }
}
    
function getLetterGrade(num){
    var letterGrade = ''
    if(num >= 93){
        letterGrade = 'A'
    }
    else if(num >= 90.00 && num < 93){
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
var topButton = document.getElementsByClassName('vx-nav-center__portal')[0]
var secondTopButton = document.getElementsByClassName('vx-nav-center__portals-button vx-tooltipped vx-tooltipped--s')[0]
var header = document.getElementsByClassName('vx-nav')[0]
var dropdownContent = document.createElement('div')
var bg = document.querySelector('body')
dropdownContent.setAttribute('class','dropdown-content')
var text = document.createElement('h1')
var extSettings = document.getElementsByClassName('chrome-extension nc-icon-glyph ui-1_settings-gear-64')[0]
var veracrossIconButton = document.getElementsByClassName('vx-nav-center__portals-button vx-tooltipped vx-tooltipped--s')[0]
veracrossIconButton.style.position = "absolute"
veracrossIconButton.style.left = '175px'
veracrossIconButton.style.borderBottom = '0px'
veracrossIconButton.style.borderTop = '0px'



var div = document.getElementsByClassName('component-button-link left')[0]

var extSettings =  document.createElement('a')
var schedule = document.getElementsByClassName('screen-button')[0]
var submitButton = document.getElementsByClassName('screen-button')[1]

var extIcon = document.createElement('i')


function addSettingsTab(){
    
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
const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // return {r, g, b} 
    return { r, g, b };
}
function showModal(){
    
    var classes_arr = []
    var classes = document.getElementsByClassName('course')
    classes_arr = Array.from(classes)
    
    console.log(classes_arr)
    var classes_included_container = document.createElement('div')
    classes_included_container.style.textAlign = 'left'
    for(clas of classes_arr){
        var classes_included = document.createElement('h1')
        classes_included.style.color = "#000000"
        classes_included.style.fontSize = "20px"
        console.log(clas.children[0].children[0].children[0].children[0].innerHTML)
        classes_included.innerHTML = `${clas.children[0].children[0].children[0].children[0].innerHTML}`
        classes_included_container.append(classes_included)
    }
    dropdownContent.appendChild(classes_included_container)





    var leftTriangle = document.getElementsByClassName('chrome-extension big-button left-triangle')[0]
    var rightTriangle = document.getElementsByClassName('chrome-extension big-button right-triangle')[0]
    
    var secondLeftTriangle = document.getElementsByClassName('chrome-extension small-button left-triangle')[0]
    var secondRightTriangle = document.getElementsByClassName('chrome-extension small-button right-triangle')[0]
   
    var assignmentPlannerIcon = document.getElementsByClassName("icon-block")[1]
    var classesAndReportsIcon = document.getElementsByClassName('icon-block')[2]
    var myCalendarIcon = document.getElementsByClassName('icon-block')[3]
    var schoolCalendarIcon = document.getElementsByClassName('icon-block')[4]
    var studentDirectoryIcon = document.getElementsByClassName('icon-block')[5]
    var facultyDirectoryIcon = document.getElementsByClassName('icon-block')[6]
    text.innerHTML = 'Change header color: '

    var colors = document.createElement('input')
    colors.setAttribute('type', 'color')
    colors.setAttribute('class','chrome-extension color-input')
    colors.setAttribute('value',localStorage.getItem('header-color'))
    dropdownContent.appendChild(text)
    dropdownContent.appendChild(colors)

    colors.addEventListener('input',(e)=>{
        console.log(localStorage.getItem('header-color'))
        if(localStorage.getItem('header-color') !== null){
            console.log(e.target.value)
            
            header.style.background = e.target.value
            
            topButton.style.background = e.target.value
            leftTriangle.style.borderBottom = `36px solid ${e.target.value}`
            leftTriangle.style.borderLeft = `14px solid transparent`
            leftTriangle.style.left = '-14px'
            rightTriangle.style.borderBottom = `36px solid ${e.target.value}`
            rightTriangle.style.borderRight = `14px solid transparent`
            rightTriangle.style.right = '-14px'
            secondTopButton.style.background = e.target.value
            secondLeftTriangle.style.borderColor = `transparent ${e.target.value} transparent transparent`
            
            secondRightTriangle.style.borderColor = `transparent transparent transparent ${e.target.value}`
            

            assignmentPlannerIcon.style.color = e.target.value
            let r = hex2rgb(e.target.value).r
            let g = hex2rgb(e.target.value).g
            let b = hex2rgb(e.target.value).b
            
            assignmentPlannerIcon.style.backgroundColor = `rgba(${r},${g},${b},0.2)`
            classesAndReportsIcon.style.color = e.target.value
            classesAndReportsIcon.style.backgroundColor = `rgba(${r},${g},${b},0.2)`
            myCalendarIcon.style.color = e.target.value
            myCalendarIcon.style.backgroundColor = `rgba(${r},${g},${b},0.2)`

            schoolCalendarIcon.style.color = e.target.value
            studentDirectoryIcon.style.color = e.target.value
            facultyDirectoryIcon.style.color = e.target.value
            schoolCalendarIcon.style.backgroundColor = `rgba(${r},${g},${b},0.2)`
            studentDirectoryIcon.style.backgroundColor = `rgba(${r},${g},${b},0.2)`
            facultyDirectoryIcon.style.backgroundColor = `rgba(${r},${g},${b},0.2)`
            //secondRightTriangle.style.borderBottom = `36px solid ${e.target.value}`
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
            colors.remove()
            dropdownContent.remove()
            classes_included_container.remove()
            notPressed = true
        }
    })
}
