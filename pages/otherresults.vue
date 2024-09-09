<template>
  <div>
    <Head>
      <Title>Other EGU Results and Standingst</Title>
    </Head>
    <div class="topsectioncenter">
      <div class="topsectionitem">
        <Common-header title="Empire Geographical Union" />
      </div>

      <div class="topsectionitem">
        <Card>
          <template #content>
            <nuxt-link
              to="https://xplorer.rugby/empire/fixtures-results?comp=7i8kPXDpmeAyzH2Mu&team=All&season=2025&tab=Fixtures"
              target="_blank"
              rel="noopener"
            >
              <Button
                label="D2 League Results"
                class="m-1"
              ></Button>
            </nuxt-link>
            <nuxt-link
              to="https://xplorer.rugby/empire/fixtures-results?comp=9LmeCHHfxEnJCEmap&team=All&season=2025&tab=Fixtures"
              target="_blank"
              rel="noopener"
            >
              <Button
                label="D3 North League Results"
                class="m-1"
              ></Button>
            </nuxt-link>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
