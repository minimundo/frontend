<template lang="">
    <div class="card-body">
        <div class="row justify-content-center mb-4">
        <h1 class="card-title text-dark">Teste suas habilidades</h1>
        </div>
        <form>
        <div class="row align-items-center">
            <div class="col-sm-3"></div>
            <div
            class="
                flex-row
                col-sm-6
                justify-content-between
                nav
                card-header-undefined
            "
            >
            <div class="nav-item transition-3d-hover">
                <a href="#" class="nav-link active"
                ><i class="fa-solid fa-book icon-header"></i
                ></a>
            </div>
            <div class="nav-item transition-3d-hover">
                <a href="#" class="nav-link"
                ><i class="fa-solid fa-map-location-dot icon-header"></i
                ></a>
            </div>
            <div class="nav-item transition-3d-hover">
                <a href="#" class="nav-link"
                ><i class="fa-solid fa-earth-americas icon-header"></i
                ></a>
            </div>
            </div>
            <div class="col-sm-3"></div>
        </div>
        </form>
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
.icon-header {
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.icon-header:hover {
  transform: translateY(-6px);
}

i {
  font-size: 1.8em;
}
</style>