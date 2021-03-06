<?php snippet('header') ?>
<?php snippet('top') ?>

<main class="content">
  <div class="content__wrap">
    <div class="contact">
      <div class="contact__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.731614498466!2d17.676767015687485!3d49.22461677932516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713735bf59dd335%3A0x5c5a042d8cc0c182!2zxaB0ZWbDoW5pa292YSA1NDYyLCA3NjAgMDEgWmzDrW4!5e0!3m2!1sen!2scz!4v1489011352017" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    <div class="kirby-contact">
      <?= $page->text()->kirbytext() ?>
    </div>
  </div>
</main>

<?php snippet('footer') ?>
