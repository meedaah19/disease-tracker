function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center text-sm text-gray-500 py-4 border-t mt-10">
      © {year} Disease Tracker App — Built by Hameedat
    </footer>
  );
}

export default Footer;
