<?php snippet('header') ?>
<?php snippet('top') ?>

<main class="content longform">
  <div class="content__wrap">
    <div class="about">
      <?php if($page->portrait()->isNotEmpty()): ?>
        <img class="about__portrait" src="<?= $page->portrait()->toFile()->url() ?>" alt="Portrét Karolíny Christo" />
      <?php endif ?>
      <div class="about__text">
        <?= $page->about()->kirbytext() ?>
      </div>
    </div>
  </div>
  <div class="divider">
    <div class="divider__wrap">
      <h1 class="divider__title title--a">O&nbsp;projektu</h1>
    </div>
  </div>
  <div class="content__wrap">
    <?= $page->project()->kirbytext() ?>
  </div>
  <div class="divider">
    <div class="divider__wrap">
      <h1 class="divider__title title--a">Poradenství</h1>
    </div>
  </div>
  <div class="content__wrap kirby-text">
    <?= $page->consulting()->kirbytext() ?>
  </div>
</main>

<?php snippet('footer') ?>
