<template>
   
    <Container>
        <div class="form-row">
                <div class="col-7">
                    <input type="text" class="form-control" placeholder="Digite um trecho da questão...">
                </div>
                <div class="col-2">
                    <select id="pais" class="custom-select">
                        <option value="" disabled selected>Serie</option>
                        <option value="">9 ano</option>
                    </select>
                </div>
                <div class="col-2">
                    <FilterQuestionSelect />
                </div>
                <div class="col">
                    <button class="col btn btn-primary">Filtrar</button>
                </div>
            </div>
    </Container>
</template>

<script>
export default {
}
</script>

<style>

</style>