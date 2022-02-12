import { MatPaginatorIntl } from "@angular/material/paginator";

const spanishRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 de ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} de ${length}`;
}
export function getSpanishPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Registros por pagina:';
  paginatorIntl.nextPageLabel = 'Siguiente pagina';
  paginatorIntl.previousPageLabel = 'Anterior pagina';
  paginatorIntl.firstPageLabel = 'Primer pagina';
  paginatorIntl.lastPageLabel = 'Ultima pagina';

  paginatorIntl.getRangeLabel = spanishRangeLabel;

  return paginatorIntl;
}
