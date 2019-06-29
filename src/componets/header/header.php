<header>
  <div class="page">
    <div class="menu">
      <ul>
        <?php
          $menu = get_menu();
          foreach($menu as $key => $value) 
          {
            echo '<li>';
            echo '<a href="'.$value->url.'" class="'.$value->title.'">'.$value->title.'</a>';
            echo '</li>';
          }
        ?>
      </ul>
    </div>
    <div class="lg">
      <ul>
        <li>
          <a lang="pt-BR" hreflang="pt-BR" href="" class="pt" data-lg="pt">PT</a>
        </li>
        <li>
          <a lang="en-US" hreflang="en-US" href="" class="en" data-lg="en">EN</a>
        </li>
        <li>
          <a lang="es-ES" hreflang="es-ES" href="" class="es" data-lg="es">ES</a>
        </li>
      </ul>
    </div> 
  </div>
</header>