<?php snippet('header') ?>
<?php snippet('top') ?>

<main class="content">
  <div class="content__wrap">
    <div class="news">
      <?php if($articles->count()): ?>
        <?php foreach($articles as $article): ?>
          <div class="news__item">
            <?php if($article->thumbnail()->isNotEmpty()): ?>
              <a href="<?= $article->url() ?>">
                <img class="news__image" src="<?= $article->thumbnail()->toFile()->url() ?>" alt="" />
              </a>
            <?php endif ?>
            <div class="news__content">
              <a class="news__title" href="<?= $article->url() ?>">
                <h1 class="title--b"><?= $article->title()->html() ?></h1>
              </a>
              <p>
                <?= $article->text()->kirbytext()->excerpt(100, 'words') ?>
                <a class="news__link" href="<?= $article->url() ?>">Více</a>
              </p>
            </div>
          </div>
        <?php endforeach ?>
      <?php else: ?>
        <p>Zatím nebyly zveřejněny žádné články.</p>
      <?php endif ?>
    </div>
  </div>
</main>

<?php snippet('footer') ?>
