$(document).ready(function(){

    //funciton for table 
    function fetch_table(){
        
        $.ajax({
            
            url:"database/retrieve.php",
            method:"GET",
            dataType:"json",
            success:function(data){
               if(data)
               {
                x=data;
                 var output ="";
               }
               else{
                x="";
               }
               for(i =0 ; i<x.length; i++){
                output += "<tr><td>"+x[i].id+"</td><td>"+x[i].name+"</td><td>"+x[i].email+"</td><td>"+x[i].password+"</td><td><button class='btn btn-success mx-2 btn-edit' data-edit="+x[i].id+">Edit</button><button class='btn btn-danger btn-del' data-id="+x[i].id+">Delete</button></td></tr>";
               }
               $("#tbody").html(output);
            },
            error:function(xhr,status,error){
                console.error(status,error);
            }
        })
    }
fetch_table();

//ajax call for insert data
    $('#btnadd').click(function(e){
        e.preventDefault();
        const name= $('#nameid').val();
        const email = $('#emailid').val();
        const pass= $('#passid').val();
        $.ajax({
            url:"database/insert_data.php",
            method:"POST",
            data:{name,email,pass},
            success:function(data){
                if(data== "success"){
                    msg = "<div class='alert alert-success'>"+data+"</div>";
                    fetch_table();
                    $("#myform")[0].reset();
                }
                else{
                    msg= "<div class='alert alert-danger'>"+data+"</div>";
                }
                $('#msg').html(msg);

            },
            error:function(xhr,status,error){
                console.error(status,error);
            }
        })
    });
    //ajax call for delete data
    $("tbody").on('click','.btn-del',function(){
        console.log('button is clicked');  
         buttonid= $(this).attr('data-id'); 
        console.log('button id = ',buttonid);
        mythis = this;
        $.ajax({
            url:"database/delete_data.php",
            method:"POST",
            data:{"id":buttonid},
            success:function(data){
                if(data == "success"){
                    msg= "Row deleted succesfully";
                    set_msg = "<div class='alert alert-success'>"+msg+"</div>";
                    $('#msg').html(set_msg);
                    $(mythis).closest('tr').fadeOut();
                    // fetch_table(); // save page time 
                }
                else{
                    alert("Error occur pls check in console")
                    console.log("Critical Error...."+data);
                }
            },
            error: function(xhr, status, error){
                console.error(status,error);
            }

        })
    });

    //ajax call for edit data
    $('tbody').on('click','.btn-edit',function(){
        console.log('edit button is clicked');
        dataId = $(this).attr('data-edit');
        $.ajax({
            url:"database/edit.php",
            method: "POST",
            data:{"id":dataId},
            dataType:"json",
            success:function(data){
                console.log(data);
                $('#nameid').val(data.name);
                $('#emailid').val(data.email);
                $("#passid").val(data.password);
            },
            error:function(xhr,error,status){
                console.error(error,status);
            }
        })
    })

});

// click(add_table);   this is example of how run a function on click.