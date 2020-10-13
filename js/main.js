var data = [
    {
        name:"Tanya Sinclair",
        desigation:"UX Engineer",
        img_src:"./images/image-tanya.jpg",
        quote:"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
    },
    {
        name:"John Tarkpor",
        desigation:"Junior Front-end Developer",
        img_src:"./images/image-john.jpg",
        quote:"“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about         starting up as a professional developer. ”"
    }
]
$(document).ready(function(){
    var i = 0;
    var len = data.length
    function showData(i){
        dataToShow = data[i]
        $('.testimony .text').text(dataToShow.quote)
        $('.testimony .attestant_name').text(dataToShow.name)
        $('.testimony .attestant_designation').text(dataToShow.desigation)
        $('.attestant_profile_image img.attestant_img').attr('src', dataToShow.img_src)
    }
    $('img.btn_prev').click(function(){
        if(i==0){
            i = len - 1
        }else{
            i = i - 1
        }
        $(this).parent().parent().fadeOut('fast',function(){
            showData(i)
        })
        $(this).parent().parent().fadeIn()
    })

    $('img.btn_next').click(function(){
        if(i==len-1){
            i = 0
        }else{
            i = i + 1
        }
        $(this).parent().parent().fadeOut('fast',function(){
            showData(i)
        })
        $(this).parent().parent().fadeIn('fast')
    })
})