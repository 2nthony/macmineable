<template>
  <p class="text-red-500 mt-0">
    macMineable is still in early development. You can send email to
    <a
      class="underline text-blue-500"
      target="_blank"
      href="mailto:ijoec123@gmail.com"
      >ijoec123@gmail.com</a
    >
    or twitter
    <a
      class="underline text-blue-500"
      target="_blank"
      href="https://twitter.com/evillt"
      >@evillt</a
    >
    for feedback.🙌
  </p>

  <hgroup>
    <h1 class="text-pink-500">macMineable</h1>
    <h6 class="text-xs text-green-500">powered by unMineable</h6>
  </hgroup>

  <p class="text-sm">
    The fastest and easiest way to start mining your favorite non-mineable (&
    some mineable) coins!
  </p>

  <router-link to="/select-coin">
    <button
      class="bg-yellow-200 border-yellow-200 w-full text-center rounded cursor-pointer py-3 px-5 text-sm outline-none leading-none"
    >
      Continue
    </button>
  </router-link>

  <p class="text-xs text-gray-700">
    <span class="font-semibold">IMPORTANT:</span>
    Mining, if not made correctly, could lead to permanent damage of your
    hardware components as it uses a lot of computation power and energy, that's
    why
    <a href="#" class="underline"
      >we have introduced a default low hashing setting
    </a>
    which will also slightly lower your rewards. You can set the high hashing
    option in advanced settings to increase you rewards at your own risk.
  </p>
</template>
