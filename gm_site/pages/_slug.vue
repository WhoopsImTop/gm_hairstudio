<template>
    <div class="content">
        <h1>{{ article.title }}</h1>
        <p style="min-width: unset;" v-html="$md.render(article.description)"></p>
    </div>
</template>

<script>
export default {
    layout: 'main',
    head() {
        return {
            title: this.article.title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: "description",
                    name: "description",
                    content: this.article.description
                }
            ]
        };
    },
    async asyncData({ $content, params }) {
        const article = await $content(params.slug).fetch();

        return { article };
    },
};
</script>

<style>
</style>