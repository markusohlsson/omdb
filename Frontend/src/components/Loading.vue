<template>
  <div class="flex justify-center items-center">
    <svg
      class="w-48 h-48"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="16" y="20" width="32" height="20" rx="2" fill="#4B5563"/>

      <circle cx="48" cy="30" r="6" fill="#6B7280"/>

      <circle class="reel" cx="20" cy="14" r="6" stroke="#9CA3AF" stroke-width="2"/>
      <circle class="reel" cx="44" cy="14" r="6" stroke="#9CA3AF" stroke-width="2"/>

      <line x1="24" y1="40" x2="16" y2="54" stroke="#9CA3AF" stroke-width="2"/>
      <line x1="40" y1="40" x2="48" y2="54" stroke="#9CA3AF" stroke-width="2"/>
      <line x1="32" y1="40" x2="32" y2="54" stroke="#9CA3AF" stroke-width="2"/>
    </svg>
  </div>
</template>

<style scoped>
@keyframes spinReel {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.reel {
  transform-origin: center;
  animation: spinReel 1.5s linear infinite;
}
</style>
