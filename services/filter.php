<?php
include('../php/connexion.php');

header('Content-type: application/json');

$requete = "SELECT nom_sportif, prenom_sportif, nom_discipline, carte, sportif.id_sportif FROM sportif, sport, rel_sportif_sport WHERE sport.id_sport = rel_sportif_sport.id_sport AND sportif.id_sportif = rel_sportif_sport.id_sportif ORDER BY nom_sportif ASC";

$requeteun = "SELECT nom_sportif, prenom_sportif, nom_discipline, carte, sportif.id_sportif FROM sportif, sport, rel_sportif_sport WHERE sport.id_sport = rel_sportif_sport.id_sport AND sportif.id_sportif = rel_sportif_sport.id_sportif";

if(isset($_GET["sport"]) and $_GET["competition"] === ""){
    $requete= $requeteun." AND rel_sportif_sport.id_sport = sport.id_sport AND sport.id_sport = {$_GET["sport"]} ORDER BY nom_sportif ASC"; //1 case avec 1 valeur de get
}
elseif(isset($_GET["competition"]) and $_GET["sport"] === ""){
    $requete="SELECT * FROM competition, sportif, rel_sportif_competition, sport, rel_sportif_sport WHERE competition.id_competition = {$_GET["competition"]} AND rel_sportif_competition.id_competition = {$_GET["competition"]} AND rel_sportif_competition.id_sportif = sportif.id_sportif AND sport.id_sport = rel_sportif_sport.id_sport AND sportif.id_sportif = rel_sportif_sport.id_sportif"; //fin requete avec le 1er get
}
elseif(isset($_GET["sport"]) and isset($_GET["competition"])){
    $requete = "SELECT * FROM competition, sportif, rel_sportif_competition, sport, rel_sportif_sport WHERE competition.id_competition = {$_GET["competition"]} AND rel_sportif_competition.id_competition = {$_GET["competition"]} AND rel_sportif_competition.id_sportif = sportif.id_sportif AND sport.id_sport = {$_GET["sport"]} AND sportif.id_sportif = rel_sportif_sport.id_sportif AND rel_sportif_sport.id_sport = {$_GET["sport"]}";// 2 filtres avec varibales, 2 cases avec 2 valeurs de get
}

if(isset($_GET["search"]) AND !empty($_GET["search"]) ){
    $q = htmlspecialchars($_GET["search"]);
    $requete = "SELECT nom_sportif, prenom_sportif, nom_discipline, carte, sportif.id_sportif FROM sportif, sport, rel_sportif_sport WHERE sport.id_sport = rel_sportif_sport.id_sport AND sportif.id_sportif = rel_sportif_sport.id_sportif AND nom_sportif LIKE '%$q%' ORDER BY nom_sportif ASC";
}

$stmt=$db->query($requete);
$result=$stmt->fetchall(PDO::FETCH_ASSOC);

?>

<div class="swiper-container">
    <div class="swiper-wrapper">
            <?php 
                foreach($result as $sportif)
                {
                    echo"
                    <a href='presentation_parasportif.php?id=".$sportif["id_sportif"]."' class='swiper-slide'>
                    <img src='images/cartes/".$sportif["carte"].".png' class='carte' sizes='(max-width: 1500px) 50vw,(max-width: 650px) 30vw' srcset='images/cartes/".$sportif["carte"].".png 500w, images/cartes_mobile/".$sportif["carte"]."-mobile.png 440w' alt=".$sportif["nom_sportif"].'&nbsp;'.$sportif["prenom_sportif"].">
                    <p>".$sportif['nom_sportif'].'&nbsp; <br>'.$sportif['prenom_sportif']."</p>
                    </a>";
                    }   
            ?>
            
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"><img src="images/bouton-slider-droite.svg" alt=""></div>
            <div class="swiper-button-prev"><img src="images/bouton-slider-gauche.svg" alt="">
    </div>
</div>
