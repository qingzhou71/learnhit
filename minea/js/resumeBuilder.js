/*
This is empty on purpose! Your code to build the resume will go here.
 */
function Bio(){
    this.name="qingzhou",
    this.role="any",
    this.contacts={
        mobile:"1324556",
        email:"0987667",
        github:"http://mein.werr",
        twitter:"checked",
        location:"陕西省西安市长安区"
    },
    this.welcomeMessage="emmm,i haven`t decide clearly yet",
    this.skills=["chi","he","wan","le"],
    this.biopic="./images/1.jpg",
    this.display=function(){
        HTMLheaderRole=HTMLheaderRole.replace("%data%",bio.role);
        $('#header').prepend(HTMLheaderRole)
        $('#header').prepend(HTMLheaderName);
        $('#name').html($('#name').html().replace("%data%",bio.name));
       
        /**替换占位符与添加HTML的两种先后方法 */
       // $('#topContacts').append(HTMLmobile);
        //var str=$('.white-text').html();       //通过选择器获取的元素属性及其他值，要求该元素已经在页面上。
        //$('.white-text').html($('.white-text').html().replace("%data%",bio.contacts.mobile));
        HTMLmobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
        HTMLemail=HTMLemail.replace("%data%",bio.contacts.email);
        HTMLtwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
        HTMLgithub=HTMLgithub.replace("%data%",bio.contacts.github);
        HTMLlocation=HTMLlocation.replace("%data%",bio.contacts.location);
        $('#topContacts').append(HTMLmobile).append(HTMLtwitter).append(HTMLgithub).append(HTMLlocation);
        $('#footerContacts').append(HTMLmobile).append(HTMLemail).append(HTMLtwitter).append(HTMLgithub).append(HTMLlocation);
        HTMLbioPic=HTMLbioPic.replace("%data%",bio.biopic);
        $('#header').append(HTMLbioPic);
        HTMLwelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
        $('#header').append(HTMLwelcomeMsg);
        $('#header').append(HTMLskillsStart);

        for(let skills of bio.skills){
           var Skills=HTMLskills.replace("%data%",skills);
            $('#header').append(Skills);
                
        }
        
    }
}

var bio=new Bio();
bio.display();

/*bio的对象创建 */

function Education(){
    this.schools=[
        one={
            name:"南京工业大学",
            location:"南京工业大学校区",
            degree:"学士",
            majors:"生物科学",   //这里的专业为什么是个数组
            dates:"2015-9",
            url:"no url here"
        },
        two={
            name:"南京大学",
            location:"南京山阴路",
            degree:"硕士",
            majors:"生物环境与科学",
            dates:"2019-9",
            url:"no neither"
        }
    ],
    this.onlineCourses=[
        frist={
            title:"i have no idea",
            school:"somewhere",
            dates:"2018-1",
            url:"don`t ask angin"
        }
    ],
    this.display=function(){
        for(let s of education.schools){
            $('#education').append(HTMLschoolStart);
            var name=HTMLschoolName.replace("%data%",s.name);
            var degree=HTMLschoolDegree.replace("%data%",s.degree);
            var dates=HTMLschoolDates.replace("%data%",s.dates);
            var location=HTMLschoolLocation.replace("%data%",s.location);
            var majors=HTMLschoolMajor.replace("%data%",s.majors);
            $('.education-entry:last').append(name).append(degree).append(dates).append(location).append(majors);
        }
        for(let o of education.onlineCourses){
            $('#education').append(HTMLonlineClasses);
            var title=HTMLonlineTitle.replace("%data%",o.title);
            var school=HTMLonlineSchool.replace("%data%",o.school);
            var dates=HTMLonlineDates.replace("%data%",o.dates);
            var url=HTMLonlineURL.replace("%data%",o.url);
            $('.online').append(title+school).append(dates).append(url);
        }


    }
}

var education=new Education();
education.display();

/**education的对象创建 */


function Work(){
    this.jobs=[
        one={
            employer:"名为大公司的公司",
            title:"i have no one",
            location:"上海市奉贤区",
            dates:"2016-4",
            description:"没有什么好描述的，这只是一个试水为什么有这么多的文字信息，我怎么知道我要写什么文字在这里！完了。"
        },
        two={
            employer:"巨有钱的公司",
            title:"没得",
            location:"广州市越秀区",
            dates:"2017-9",
            description:"写首诗吧：你去过的沙漠和荒原，我也去过，你在流浪的时候，我也没有一个自己的家，结束"
        }
    ],
    this.display=function(){
        
        for(let s of work.jobs){
            $('#workExperience').append(HTMLworkStart);
           var employer=HTMLworkEmployer.replace("%data%",s.employer);
           var title=HTMLworkTitle.replace("%data%",s.title);
           var dates=HTMLworkDates.replace("%data%",s.dates);
           var location=HTMLworkLocation.replace("%data%",s.location);
           var description=HTMLworkDescription.replace("%data%",s.description);
            $('.work-entry:last').append(employer+title).append(dates).append(location).append(description);  //确保添加的发起者始终是新添加的空的框架
        }
    }
    
}

var work=new Work();
work.display();


function Projects(){
    this.projects=[
        one={
            title:"第一个",
            dates:"2016-1",
            description:"继续写首诗吧：靖康耻，犹未雪，臣子恨，何时灭，驾长车，踏破贺兰山缺。壮志饥餐胡虏肉，笑谈渴饮匈奴血。待从头，收拾旧山河，朝天阙。",
            image:["./images/2.gif","./images/2.gif"]
        },
        two={
            title:"第二个",
            dates:"2017-7",
            description:"把那个上阙补完吧：怒发冲冠，凭栏处，潇潇雨歇，抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月。莫等闲，白了少年头，空悲切。",
            image:["./images/2.gif","./images/2.gif"]
        }
    ],
    this.display=function(){
        for(let p of projects.projects){
            $('#projects').append(HTMLprojectStart);
           var title=HTMLprojectTitle.replace("%data%",p.title);
           var dates=HTMLprojectDates.replace("%data%",p.dates);
           var description=HTMLprojectDescription.replace("%data%",p.description);
           var image=[];
          
          for(let tu of p.image){
              image.push(HTMLprojectImage.replace("%data%",tu));
          }
            $('.project-entry:last').append(title).append(dates).append(description).append(image);
        }
    }
}

var projects=new Projects();
projects.display();

$('#container').append(googleMap);


function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });
    

    return locations;
  }
  var Locations=locationFinder();
 
