<?php snippet('header') ?>
<?php snippet('top') ?>

<main class="content longform">
  <div class="content__wrap">
    <div class="about"><img class="about__portrait" src="/assets/images/portrait.jpg" alt="Portrét Karolíny Christo">
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
