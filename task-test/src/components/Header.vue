<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link active-class="active" to="/" class="nav-link">Slot Requests</router-link>
            <router-link active-class="active" to="/slot-report" class="nav-link">Slot Report</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>
