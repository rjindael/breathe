<script>
    import { fade } from "svelte/transition"
    import BreatheButton from "./BreatheButton.svelte"

    let permissionGranted = false
    let showOverlay = true
    let showMain = false
    let position

    const stored = localStorage.getItem("locationPermissionGranted")
    if (stored === "true") {
        showOverlay = false
        showMain = true
    }

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                permissionGranted = true
                localStorage.setItem("locationPermissionGranted", "true")
                showOverlay = false
                setTimeout(() => {
                    showMain = true
                }, 1500)
                position = pos
            },
            (err) => {
                localStorage.setItem("locationPermissionGranted", "false")
                console.error("Geolocation permission denied:", err)
                showMain = false
                setTimeout(() => {
                    showOverlay = true
                }, 550)
            }
        )
    } else {
        alert("Geolocation capabilities are not supported by your browser.")
    }
</script>

<div>
    {#if showOverlay}
        <div class="flex flex-col items-center" transition:fade={{ duration: 300 }}>
            <span class="mb-3 text-4xl font-bold">This is an immersive experience.</span>
            <span class="text-xl text-neutral-200">Please turn on your volume and allow all necessary permissions in order to continue.</span>
        </div>
    {/if}

    {#if showMain}
        <div class="flex flex-col items-center" transition:fade={{ duration: 300 }}>
            <span class="mb-6 text-3xl font-semibold">Please breathe.</span>
            <BreatheButton />
        </div>
    {/if}
</div>
