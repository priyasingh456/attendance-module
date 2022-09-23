<template>
    <div class="d-flex justify-content-center">
        <div class="spinner-border text-color" role="status">
            <span class="visually-hidden">
                {{message}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            default: 'Processing'
        }
    }
}
</script>

<style>

.text-color{
    color: rgb(111, 251, 251);
}

</style>