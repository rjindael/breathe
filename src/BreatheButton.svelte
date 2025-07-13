<script>
    let cooldown = false
    let progress = 0
    let cooldownDuration = 2500

    const startCooldown = () => {
        if (cooldown) return

        cooldown = true
        progress = 0

        const interval = 50
        let elapsed = 0

        const timer = setInterval(() => {
            elapsed += interval
            progress = Math.min((elapsed / cooldownDuration) * 100, 100)

            if (elapsed >= cooldownDuration) {
                clearInterval(timer)
                progress = 0
                cooldown = false
            }
        }, interval)
    }
</script>

<div class="flex flex-col items-center space-y-2">
    <div class="relative h-10 w-40">
        <button class="relative z-10 h-full w-full rounded border border-white px-5 py-1.5 font-print text-lg text-white disabled:cursor-not-allowed disabled:opacity-50" on:click={startCooldown} disabled={cooldown}>breathe</button>
        <div class="absolute left-0 top-0 z-0 h-full rounded bg-white/20 transition-all duration-100" style="width: {progress}%"></div>
    </div>
</div>
