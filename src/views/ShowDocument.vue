<template>
  <div>
    <DocumentContent/>
    <ListDocuments/>
  </div>
</template>

<script>
import DocumentContent from "@/components/DocumentContent";
import ListDocuments from "@/components/ListDocuments";

export default {
  name: "ShowDocument",
  components: {ListDocuments, DocumentContent}
}
</script>

<style scoped>

</style>