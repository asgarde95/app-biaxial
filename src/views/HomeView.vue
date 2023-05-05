<template>
    <div class="container">
        <div>
            <h1 style=""><span>{{ $t(1) }}<span id="biaxial">Biaxial</span></span></h1>
            <button class="btn btn-secondary lang" @click="toggleLang">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-translate"
                    viewBox="0 0 16 16">
                    <path
                        d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z">
                    </path>
                    <path
                        d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z">
                    </path>
                </svg>
            </button>
            <div class="sub-lang" v-if="openLang">
                <button class="btn btn-light" @click="$i18n.locale = `${'es'}`">
                    ES
                </button>
                <button class="btn btn-light" @click="$i18n.locale = `${'en'}`">
                    EN
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-5">
                <h2>{{ $t(2) }}</h2>
                <p class="text-justify">
                    {{ $t(6) }}
                    <br />
                    {{ $t(7) }}
                    <br />
                    {{ $t(8) }}
                </p>
                <p class="text-justify">
                    <RouterLink to="/About" class="btn btn-lg btn-light fw-bold border-white bg-white">{{ $t(4) }}
                    </RouterLink>
                </p>
            </div>
            <div class="col-2">
            </div>
            <div class="col-5">
                <h2>{{ $t(3) }}</h2>
                <p class="text-justify">
                    {{ $t(9) }}
                </p>
                <p class="text-justify">
                    <RouterLink to="/RealTime" class="btn btn-lg btn-light fw-bold border-white bg-white">{{ $t(5) }}
                    </RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const openLang = ref(false)
function toggleLang() {
    openLang.value = !openLang.value;
}

</script>

<style scoped>
.lang {
    position: fixed;
    margin-top: 0px;
    z-index: 100;
    right: 10px;
    top: 10px;
}

.sub-lang {
    position: fixed;
    right: 10px;
    top: 50px;
}

.sub-lang button {
    display: block;
    margin-top: 4px;
}
</style>
