var i=0,t=0,key=1; // key represents the file name of image

function f(a,b){

    if(b)key++;
    if(!b) key--;
    for(i=1;i<=10;i++){
        t=key+i-1;
        document.getElementById("small_img_"+i).src= "./data/"+t+".jpg";
    }
    document.getElementById("main_img").src= "./data/"+key+".jpg";

}