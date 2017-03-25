<?php snippet('header') ?>
<?php snippet('top') ?>

<main class="content">
  <div class="kirby-text content__wrap">
    <?= $page->text()->kirbytext() ?>
  </div>
  <section class="gallery" data-featherlight-gallery data-featherlight-filter="[data-gallery]">
    <?php
      // https://github.com/TimOetting/kirby-gallery
      foreach($page->pictures()->yaml() as $image): ?>
      <?php if($img = $page->image($image)): ?>
        <a class="gallery__item" href="<?= $img->url() ?>" data-gallery>
          <img class="gallery__image" src="<?= thumb($img, array('height' => 400))->url() ?>" alt="Gallery Photo">
        </a>
      <?php endif ?>
    <?php endforeach ?>
  </section>
</main>

<?php snippet('footer') ?>
