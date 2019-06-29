<header>
  <div class="page">
    <div class="menu">
      <ul>
        <?php
          $menu = get_menu();
          foreach($menu as $key => $value) 
          {
            echo '<li>';
            echo '<a href="'.$value->url.'">'.$value->title.'</a>';
            echo '</li>';
          }
        ?>
      </ul>
    </div>
    <div class="lg">
      <ul>
        <li>
          <a href="">PT</a>
        </li>
        <li>
          <a href="">EN</a>
        </li>
        <li>
          <a href="">ES</a>
        </li>
      </ul>
    </div> 
  </div>
</header>