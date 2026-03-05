// =============================================
// FINANCES PUBLIQUES — INTERACTIVE LOGIC
// =============================================

// ── Sidebar Collapse Toggle ──
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('.main-content');
    const toggle = document.querySelector('.sidebar-toggle');

    sidebar.classList.toggle('collapsed');
    main.classList.toggle('expanded');
    toggle.classList.toggle('shifted');

    // Update icon
    if (sidebar.classList.contains('collapsed')) {
        toggle.innerHTML = '☰';
    } else {
        toggle.innerHTML = '✕';
    }
}

// ── Accordion Sidebar Logic ──
function toggleAccordion(btn) {
    if (btn.classList.contains('disabled')) return;

    const item = btn.parentElement;
    const content = item.querySelector('.accordion-content');

    if (item.classList.contains('active')) {
        item.classList.remove('active');
        content.classList.remove('show');
    } else {
        item.classList.add('active');
        content.classList.add('show');
    }
}

// ── Post-it Note Logic ──
let currentOpenNote = null;

function toggleNote(noteId) {
    const noteElement = document.getElementById(noteId);
    if (!noteElement) return;

    if (currentOpenNote === noteElement) {
        closeNote();
        return;
    }

    if (currentOpenNote) {
        currentOpenNote.classList.remove('open');
    }

    noteElement.classList.add('open');
    currentOpenNote = noteElement;

    // Smooth scroll to the note
    setTimeout(() => {
        noteElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function closeNote() {
    if (currentOpenNote) {
        currentOpenNote.classList.remove('open');
        currentOpenNote = null;
    }
}

// ── Mobile sidebar handling ──
document.addEventListener('DOMContentLoaded', () => {
    // Close sidebar on mobile when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const sidebar = document.querySelector('.sidebar');
                sidebar.classList.remove('mobile-open');
            }
        });
    });
});
