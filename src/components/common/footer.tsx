const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="flex flex-col items-center justify-between md:justify-center gap-4 border-t border-t-slate-200 py-10 dark:border-t-slate-700 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-slate-600 dark:text-slate-400 md:text-left">
            Built by{" "}
            <a
              href="https://twitter.com/iwanttobeinmars"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Franklin
            </a> {" "}
            and the source code is available on{" "}
            <a
              href="https://github.com/makyfj/franklinjara.dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>{" "}
            for anyone interested in exploring.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
