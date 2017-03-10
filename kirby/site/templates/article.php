<?php snippet('header') ?>
<?php snippet('top') ?>

<main class="content">
  <div class="content__wrap">

    <div class="detail">
      <h1 class="detail__title title--d"><?= $page->title()->html() ?></h1>

      <?php if($page->cover()->isNotEmpty()): ?>
        <div class="detail__intro">
          <img class="detail__hero" src="<?= $page->cover()->toFile()->url() ?>" alt="Blog Post Image">
        </div>
      <?php endif ?>

      <div class="detail__text">
        <?= $page->text()->kirbytext() ?>
      </div>
    </div>

    <div class="pagination">
      <a class="pagination__link--back" href="<?php echo $page->parent()->url() ?>">&larr; Zpátky</a>
    </div>

  </div>
</main>
<?php snippet('footer') ?>
