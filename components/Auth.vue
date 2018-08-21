<template lang="pug">
  .auth
    h4="Авторизуйтесь"
    form(action="/auth" method="POST")
      .form__inline
        span.icon.icon__people
          img(src="~/assets/img/sprite/login.svg")
        input(type="text" name="login" placeholder="Логин" data-error="Вы не ввели логин").input.input__login
      .form__inline
        span.icon.icon__people
          img(src="~/assets/img/sprite/password.svg")
        input(type="text" name="password" placeholder="Пароль" data-error="Вы не ввели пароль").input.input__password
      .form__inline
        input(type="checkbox" name="robots" value='people' id="robots" checked).checkbox
        label(for="robots").label="Я человек"
      .form__inline
        p='Вы точно человек?'
        .group
          input(type="radio" name="people" value='yes' id="people_yes").radio
          label(for="people_yes").label__radio="Да"
        .group
          input(type="radio" name="people" value='people' id="people_no" checked).radio
          label(for="people_no").label__radio="Нет"
      .form__all
        button.to__index="На главную"
        input(type="submit" name="send" value="Войти")
</template>

<script>
  export default {
    name: 'auth',
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/style/components/auth.scss";
</style>
