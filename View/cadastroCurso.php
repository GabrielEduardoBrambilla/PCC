<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
<div class="main-cadastro">
    <div class="box-cadastro">
        <h2>Cadastro de Curso</h2>
        <form method="POST" action="" class="form-cadastro">
            <div class="inputBox-cadastro">
                <?php
                $nomeCurso = "";
                if (isset($valueForm['nomeCurso'])) {
                    $nomeCurso = $valueForm['nomeCurso'];
                }
                ?>

                <input type="text" name="nomeCurso" id="name" value="<?php echo $nomeCurso ?>" required="required">
                
            </div>

            <div class="inputBox-cadastro">
                <?php
                $descricao = "";
                if (isset($valueForm['descricao'])) {
                    $descricao = $valueForm['descricao'];
                }
                ?>
                
                <input type="descricao" name="descricao" id="descricao" value="<?php echo $descricao ?>" required="required">
            </div>

            <div class="inputBox-cadastro">
                <?php
                $objetivos = "";
                if (isset($valueForm['objetivos'])) {
                    $objetivos = $valueForm['objetivos'];
                }
                ?>
                <input type="text" name="objetivos" value="<?php echo $objetivos ?>" required="required">
                <span>Objetivos</span>
                <i></i>
            </div>

            <div class="inputBox-cadastro">
                <?php
                $hiperlink = "";
                if (isset($valueForm['hiperlink'])) {
                    $hiperlink = $valueForm['hiperlink'];
                }
                ?>
                <input type="text" name="hiperlink" value="<?php echo $hiperlink ?>" required="required">
                <span>hiperlink</span>
                <i></i>
            </div>

            <div class="inputBox-cadastro">
                <?php
                $idResponsavel = "";
                if (isset($valueForm['idResponsavel'])) {
                    $idResponsavel = $valueForm['idResponsavel'];
                }
                ?>
                <input type="text" name="idResponsavel" value="<?php echo $idResponsavel ?>" required="required">
                <span>Usuário responsável</span>
                <i></i>
            </div>

            <div class="links-cadastro">
                <input type="submit" name="Cadastrar" value="Cadastrar">
                <!-- <a href="<?php echo URLADM; ?>login/index"> Sign in </a> -->
            </div>
        </form>
    </div>
</div>
</body>
</html>