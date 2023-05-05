<template>
    <RouterView></RouterView>
    <Footer></Footer>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'

import { useConnectionStore } from '@/store/connection'
import { onMounted } from "vue"

const connection = useConnectionStore()

const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

onMounted(async () => {
    const qs = new URLSearchParams(window.location.search);
    if (qs.get('vid') && qs.get('pid')) {
        await connection.init(qs.get('vid'), qs.get('pid'))
    }
})
</script>

<style scoped></style>
