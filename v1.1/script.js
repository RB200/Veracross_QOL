setTimeout(()=>{
    var div = document.getElementsByClassName('component-heading')[1]
    var url = window.location.href
    console.log('hi')
    if(url.endsWith('/student')){
        console.log(days)
        var days = document.getElementsByClassName('days')[0]
        days.style.display = 'none'
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
        var days = document.getElementById('days')
        days.style.display = 'none'
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
},200)
