import * as React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface TablePaginationProps {
  currentPage: number;
  totalRecords: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
  label?: string;
  className?: string;
  showFirstLast?: boolean;
}

export function TablePagination({
  currentPage,
  totalRecords,
  pageSize = 35,
  onPageChange,
  label = "records",
  className,
  showFirstLast = false,
}: TablePaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalRecords / pageSize));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);

  const from = totalRecords === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const to = Math.min(safePage * pageSize, totalRecords);

  const windowSize = 5;
  let startPage = 1;
  if (totalPages <= windowSize) {
    startPage = 1;
  } else {
    // Sliding window logic: when page 4 or higher is selected, slide window
    startPage = Math.max(1, Math.min(safePage - 2, totalPages - windowSize + 1));
  }
  const endPage = Math.min(startPage + windowSize - 1, totalPages);

  const pages: number[] = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div
      data-slot="table-pagination"
      className={cn(
        "flex flex-col sm:flex-row justify-between items-center gap-3 py-3 px-4 border-t border-border/60 bg-foreground/[0.01]",
        className
      )}
    >
      <div className="text-xs font-oswald uppercase tracking-wider text-muted-foreground whitespace-nowrap">
        Showing <span className="font-bold text-foreground">{from}</span> –{" "}
        <span className="font-bold text-foreground">{to}</span> of{" "}
        <span className="font-bold text-foreground">{totalRecords}</span> {label}
        {totalPages > 1 && (
          <span className="ml-2 font-mono text-[11px] text-muted-foreground/80">
            (Page {safePage} of {totalPages})
          </span>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center space-x-1 order-1 sm:order-2">
          {showFirstLast && (
            <Button
              size="icon"
              variant="ghost"
              disableWave
              className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground disabled:opacity-30 rounded-xs"
              onClick={() => onPageChange(1)}
              disabled={safePage <= 1}
              title="First Page"
            >
              <span className="sr-only">First page</span>
              <ChevronsLeft className="h-4 w-4" />
            </Button>
          )}

          <Button
            size="icon"
            variant="ghost"
            disableWave
            className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground disabled:opacity-30 rounded-xs"
            onClick={() => onPageChange(Math.max(1, safePage - 1))}
            disabled={safePage <= 1}
            title="Previous Page"
          >
            <span className="sr-only">Previous page</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {startPage > 1 && (
            <>
              <Button
                size="icon"
                variant="ghost"
                disableWave
                className="h-7 w-7 p-0 text-xs font-oswald font-bold transition-all rounded-xs text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                onClick={() => onPageChange(1)}
              >
                1
              </Button>
              {startPage > 2 && (
                <span className="px-1 text-xs text-muted-foreground select-none">...</span>
              )}
            </>
          )}

          {pages.map((p) => (
            <Button
              key={p}
              size="icon"
              variant="ghost"
              disableWave
              className={cn(
                "h-7 w-7 p-0 text-xs font-oswald font-bold transition-all rounded-xs",
                safePage === p
                  ? "bg-primary text-white hover:bg-primary/90 hover:text-white"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
              )}
              onClick={() => onPageChange(p)}
            >
              {p}
            </Button>
          ))}

          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <span className="px-1 text-xs text-muted-foreground select-none">...</span>
              )}
              <Button
                size="icon"
                variant="ghost"
                disableWave
                className="h-7 w-7 p-0 text-xs font-oswald font-bold transition-all rounded-xs text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                onClick={() => onPageChange(totalPages)}
              >
                {totalPages}
              </Button>
            </>
          )}

          <Button
            size="icon"
            variant="ghost"
            disableWave
            className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground disabled:opacity-30 rounded-xs"
            onClick={() => onPageChange(Math.min(totalPages, safePage + 1))}
            disabled={safePage >= totalPages}
            title="Next Page"
          >
            <span className="sr-only">Next page</span>
            <ChevronRight className="h-4 w-4" />
          </Button>

          {showFirstLast && (
            <Button
              size="icon"
              variant="ghost"
              disableWave
              className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground disabled:opacity-30 rounded-xs"
              onClick={() => onPageChange(totalPages)}
              disabled={safePage >= totalPages}
              title="Last Page"
            >
              <span className="sr-only">Last page</span>
              <ChevronsRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
