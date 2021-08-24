function f() 
{   
    var local = ["cn", "date","emp","add","stat", "zip", "ss", "hp","cp", "ec", "ep", "comment"];   
    
    var i;
    for (i = 0; i < local.length; i++)
    {
        var n = document.getElementById(local[i]).value;
        localStorage.setItem(local[i], n);

    }
    

}