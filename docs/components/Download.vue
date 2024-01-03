<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps({
  DownloadText: {
    type: String,
    default: "Download",
  },
  latestVersionText: {
    type: String,
    default: "Latest Version",
  },
  latestReleasePageText: {
    type: String,
    default: "Latest Release Page",
  },
  DownloadZipText: {
    type: String,
    default: "Download .zip",
  },
  DownloadExeText: {
    type: String,
    default: "Download .exe Installer",
  },
});

const version = ref("__");

onMounted(async () => {
  const res = await fetch("https://api.upup.cool/get/hlae/version", {
    method: "GET",
    headers: {
      "Content-Type": "text/plain",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  if (!res.ok) {
    console.error("HTTP error", res.status);
  } else {
    version.value = await res.text();
  }
});
</script>

<template>
  <div class="flex justify-center w-full mx-auto mb-8 text-center mt-28">
    <div
      class="max-w-[1152px] w-full flex flex-col gap-6 justify-center items-center"
    >
      <h1 id="download" class="text-3xl font-semibold">{{ DownloadText }}</h1>

      <div>{{ latestVersionText }}: {{ version }}</div>
      <a
        class="text-red-700 cursor-pointer hover:text-red-700/60"
        href="https://github.com/advancedfx/advancedfx/releases/latest"
        target="_blank"
        >{{ latestReleasePageText }}</a
      >
      <section class="flex gap-4">
        <a
          href="https://api.upup.cool/get/hlae"
          target="_blank"
          class="px-4 py-2 transition bg-gray-100 border rounded cursor-pointer hover:bg-gray-200 max-w-fit"
        >
          {{ DownloadZipText }}
        </a>
        <a
          href="https://api.upup.cool/get/hlae-installer"
          target="_blank"
          class="px-4 py-2 transition bg-gray-100 border rounded cursor-pointer hover:bg-gray-200 max-w-fit"
        >
          {{ DownloadExeText }}
        </a>
      </section>
    </div>
  </div>
</template>
