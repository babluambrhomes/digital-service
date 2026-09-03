export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center py-24 kraft-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-dashed border-primary border-t-transparent" />
        <p className="font-patrick text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
