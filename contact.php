<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png"
        href="http://zakariaecf.alwaysdata.net/wp-content/uploads/2022/05/cropped-logo3-2.png"/>
    <title>Validation Javascript</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style/output.css">
   
    
    <title>Contact Essentielle</title>
    
</head>

<?php
include("common/header.php");
?>
<div class="bannieri">
  <img src="img/bandeau-presentation-institut.jpg" alt="bannier">
</div>
  <div><p class="bannierp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium aperiam architecto explicabo nihil esse qui reiciendis ipsum rem exercitationem tempora, deserunt alias necessitatibus sit accusantium. Repellat, vel natus. Soluta, tenetur esse animi earum optio corrupti sequi amet nemo magnam maxime deserunt placeat! Voluptatum quo, voluptatem rem perspiciatis facilis eum corrupti ipsum porro debitis, ipsam similique magni exercitationem est laboriosam. Distinctio incidunt velit, pariatur quas quos officia, accusantium natus tempore officiis veritatis at ipsa ratione tenetur perspiciatis iure aliquid suscipit amet! Animi sunt deserunt dicta consectetur omnis. Ullam nobis quia porro, modi vitae cum minima debitis quam veniam pariatur repellendus?
  Voluptatum quo, voluptatem rem perspiciatis facilis eum corrupti ipsum porro debitis, ipsam similique magni exercitationem est laboriosam. Distinctio incidunt velit, pariatur quas quos officia, accusantium natus tempore officiis veritatis at ipsa ratione tenetur perspiciatis iure aliquid suscipit amet! Animi sunt deserunt dicta consectetur omnis. Ullam nobis quia porro, modi vitae cum minima debitis quam veniam pariatur repellendus?
  </p>
</div>
<div class="container my-5">
        <form id="signup" class="form w-100" name='formValidate'>
            <h1>Form validation Javascript en Example</h1>
            <div class="form-field">
                <label for="name">Nom d'utilisateur:</label>
                <input type="text" name="username" id="username" autocomplete="off">
                <small></small> <!-- emplacement message success ou error -->
            </div>
            <div class="form-field">
                <label for="username">Nom:</label>
                <input type="text" name="lastname" id="lastname" autocomplete="off" >
                <small></small>  <!-- emplacement message success ou error -->
            </div>
            <div class="form-field">
                <label for="username">Prénom:</label>
                <input type="text" name="firstname" id="firstname" autocomplete="off">
                <small></small>  <!-- emplacement message success ou error -->
            </div>
            <!--Date de naissance-->
            <div class="form-field">
                <label for="date"></label>
                <input for='date' type="date" name="date" id="date" required />
                <small></small>
            </div>

            <!--                 -->
            <div class="form-field">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" autocomplete="off">
                <small></small> <!-- emplacement message success ou error -->
            </div>
            
            <div class="form-field">
                <label for="password">Mot de passe:</label>
                <input type="password" name="password" id="password" autocomplete="off">
                <small></small>  <!-- emplacement message success ou error -->
            </div>
            <div class="form-field">
                <label for="password">Comfirmer votre mot de passe:</label>
                <input type="password" name="comfirmpassword" id="comfirmpassword" autocomplete="off">
                <small></small>  <!-- emplacement message success ou error -->
            </div>

            <div>
                <input type="checkbox" id="homme" name="homme" value="homme">
                <label for="homme">Homme</label>
                <input type="checkbox" id="femme" name="femme" value="femme">
                <label for="femme">Femme</label>
            </div>

            <div>
                <input type="checkbox"> Condition general d'utilisation</div>
            <div class="text-center">
                <button class="btn btn-primary mt-3" type="submit">Valider</button>
            </div>

        </form>
    </div>
    
<?php
include("common/footer.php");
?>
<script src="js/main.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>